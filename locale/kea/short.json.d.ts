import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kea';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;