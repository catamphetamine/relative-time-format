import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'az';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;