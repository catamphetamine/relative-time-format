import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'syr';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;