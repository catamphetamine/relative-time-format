import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'az';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;