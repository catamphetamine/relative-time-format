import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'az';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;