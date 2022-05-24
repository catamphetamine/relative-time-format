import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'yi';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;