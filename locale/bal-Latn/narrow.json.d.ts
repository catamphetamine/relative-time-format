import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'bal-Latn';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;