import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'bal-Latn';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;