import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ia';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;