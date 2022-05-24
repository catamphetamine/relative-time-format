import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'yi';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;