import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'tn';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;